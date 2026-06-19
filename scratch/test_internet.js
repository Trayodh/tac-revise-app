async function testInternet() {
  try {
    const res = await fetch("https://generativelanguage.googleapis.com/");
    console.log("Status:", res.status);
  } catch (e) {
    console.log("Error:", e.message);
  }
}

testInternet();
