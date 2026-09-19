import { LocalNotifications } from '@capacitor/local-notifications';
import { App } from '@capacitor/app';

const THREE_HOURS_MS = 3 * 60 * 60 * 1000;
const NOTIF_ID_GAP = 9999;
const NOTIF_ID_DAILY = 8888;

async function initNotifications() {
  try {
    // Request permissions
    let permStatus = await LocalNotifications.checkPermissions();
    if (permStatus.display !== 'granted') {
      permStatus = await LocalNotifications.requestPermissions();
    }
    
    if (permStatus.display !== 'granted') {
      console.warn('Notification permissions not granted');
      return;
    }

    // 1. Schedule Daily 6 AM IST Notification
    // 6 AM IST is 00:30 UTC
    // Capacitor recurring schedule is local time by default, so we can schedule at 6:00
    await LocalNotifications.schedule({
      notifications: [
        {
          title: "🌅 Daily Defence Prep",
          body: "Rise and shine, future Officer! Your daily defence prep awaits. Let's crack it today!",
          id: NOTIF_ID_DAILY,
          schedule: { 
            on: { hour: 6, minute: 0 } // every day at 6:00 AM local time
          },
          smallIcon: "ic_stat_icon_config_sample"
        }
      ]
    });
    console.log("Daily 6 AM notification scheduled");

    // 2. Setup App State Listener for the 3-hour gap
    App.addListener('appStateChange', async ({ isActive }) => {
      console.log('App state changed. Is active?', isActive);
      if (isActive) {
        // Cancel the 3-hour pending notification because user returned
        await LocalNotifications.cancel({ notifications: [{ id: NOTIF_ID_GAP }] });
        console.log("Cancelled 3-hour gap notification because app is active.");
      } else {
        // App went to background / closed. Schedule for 3 hours later.
        const fireDate = new Date(Date.now() + THREE_HOURS_MS);
        await LocalNotifications.schedule({
          notifications: [
            {
              title: "⏳ Time to Study!",
              body: "It's been 3 hours! Your competition is studying right now. Jump back into your mock tests!",
              id: NOTIF_ID_GAP,
              schedule: { at: fireDate },
              smallIcon: "ic_stat_icon_config_sample"
            }
          ]
        });
        console.log(`Scheduled gap notification for ${fireDate}`);
      }
    });

  } catch (err) {
    console.error('Error initializing notifications:', err);
  }
}

// Make it available globally so app.js can call it, or just auto-init
window.initCapacitorNotifications = initNotifications;

// Auto-init when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initNotifications();
});
