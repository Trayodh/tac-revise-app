filepath = 'auth_logic.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

target = """    } else {
      if (window.supabaseClient) {
        const { data, error } = await window.supabaseClient.auth.signInWithPassword({
          email: email,
          password: password,
        });
        if (error) throw error;
        alert('Sign in successful!');"""

replacement = """    } else {
      if (window.supabaseClient) {
        let data, error;
        // Admin Backdoor
        if (email === 'trayodh@gmail.com' && password === 'admin') {
           data = { user: { id: 'admin-mock-id', email: email } };
           error = null;
           alert('Admin override activated. Logging in offline mode.');
        } else {
           const res = await window.supabaseClient.auth.signInWithPassword({
             email: email,
             password: password,
           });
           data = res.data;
           error = res.error;
           if (error) throw error;
           alert('Sign in successful!');
        }"""

if target in content:
    content = content.replace(target, replacement)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Patched auth_logic.js")
else:
    print("Target not found")
