import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://lmtvzmagwdegwravdcue.supabase.co',
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtdHZ6bWFnd2RlZ3dyYXZkY3VlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0OTMzMTYsImV4cCI6MjA2MTA2OTMxNn0.Kc7eVAIdPTSOnCBaMpFowYBPBjuBgkwyJA6nZD-F2yU'
);

document.getElementById('signup-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const surname = document.getElementById('surname').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const location = document.getElementById('location').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'user@example.com',
    password: 'userpassword'
  });
  

  if (signupError) {
    alert('Signup failed: ' + signupError.message);
    return;
  }

  const userID = data?.user?.id;

  const { error: profileError } = await supabase.from('signup').insert([{
    profileID: user.user.id,
    name,
    surname,
    phone_number: phone,
    location,
    email
  }]);

  if (profileError) {
    alert('Profile insert failed: ' + profileError.message);
  } else {
    alert('Signup successful! Please log in.');
    window.location.href = 'login.html';
  }
});
