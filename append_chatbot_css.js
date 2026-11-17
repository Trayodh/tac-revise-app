const fs = require('fs');

const css = `
/* AI Chatbot Styles */
.ai-chatbot-launcher {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: linear-gradient(135deg, var(--accent) 0%, var(--info) 100%);
  color: var(--bg-primary);
  padding: 12px 24px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  box-shadow: var(--shadow-glow);
  z-index: 100;
  transition: transform var(--transition-normal), box-shadow var(--transition-fast);
}

.ai-chatbot-launcher:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 25px rgba(34, 197, 94, 0.4);
}

.launcher-icon {
  font-size: 1.5rem;
}

.launcher-text {
  font-weight: 700;
  letter-spacing: 0.5px;
}

.ai-chatbot-drawer {
  position: fixed;
  bottom: 90px;
  right: 24px;
  width: 380px;
  height: 500px;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px) scale(0.95);
  transform-origin: bottom right;
  transition: var(--transition-normal);
  overflow: hidden;
}

.ai-chatbot-drawer.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

.chatbot-header {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%);
  border-bottom: 1px solid var(--border);
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chatbot-title {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--text-primary);
}

.chatbot-subtitle {
  font-size: 0.8rem;
  color: var(--accent);
  font-family: var(--font-mono);
  margin-top: 2px;
}

.chatbot-close-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-fast);
}

.chatbot-close-btn:hover {
  color: var(--danger);
  transform: scale(1.1);
}

.chatbot-messages {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.chat-message {
  max-width: 85%;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 0.95rem;
  line-height: 1.5;
  word-wrap: break-word;
}

.chat-message.system {
  background-color: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: var(--text-primary);
  align-self: flex-start;
  border-bottom-left-radius: 2px;
}

.chat-message.user {
  background-color: var(--bg-tertiary);
  border: 1px solid var(--border);
  color: var(--text-primary);
  align-self: flex-end;
  border-bottom-right-radius: 2px;
}

.loading-msg {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-style: italic;
  background: transparent !important;
  border: none !important;
}

.loading-dots {
  display: inline-block;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
}

.chatbot-input-area {
  padding: 16px;
  border-top: 1px solid var(--border);
  display: flex;
  gap: 12px;
  background-color: var(--bg-primary);
}

.chatbot-input-area input {
  flex: 1;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border);
  color: var(--text-primary);
  padding: 12px 16px;
  border-radius: 24px;
  font-size: 0.95rem;
  outline: none;
  transition: var(--transition-fast);
}

.chatbot-input-area input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.15);
}

.chatbot-send-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: var(--accent);
  color: var(--bg-primary);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition-fast);
}

.chatbot-send-btn:hover {
  background-color: var(--accent-light);
  transform: scale(1.05);
}

/* Chatbot markdown rendering */
.chat-message.system p { margin-bottom: 8px; }
.chat-message.system h3 { margin: 12px 0 8px 0; font-size: 1.05rem; }
.chat-message.system ul { padding-left: 20px; margin-bottom: 8px; }
.chat-message.system li { margin-bottom: 4px; }
.chat-message.system code { 
  background-color: rgba(0,0,0,0.3); 
  padding: 2px 4px; 
  border-radius: 4px; 
  font-family: var(--font-mono); 
  font-size: 0.85em; 
}
`;

fs.appendFileSync('index.css', css);
console.log('Appended CSS to index.css');
