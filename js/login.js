// js/login.js

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email").value.trim();
  const passwordInput = document.getElementById("password").value;

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("لا يوجد مستخدم مسجل! يرجى التسجيل أولاً.");
    return;
  }

  if (emailInput === savedUser.email && passwordInput === savedUser.password) {
    alert("تم تسجيل الدخول بنجاح!");
    // يمكن تخزين حالة الدخول
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", savedUser.username);
    window.location.href = "index.html"; // إعادة التوجيه للصفحة الرئيسية
  } else {
    alert("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
  }
});
