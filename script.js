// تعريف المتغيرات الأساسية
const fullName = "Khansa Fayez Khadro";
let age = 17;
const country = "Turkey";
const major = "Web Design & UI/UX";

// هل أنا طالب وهل أعمل (Boolean)
let isStudent = true;
let isWorking = false;

// أمثلة على Undefined و Null
let graduationProject; // undefined
let currentJob = null; // null

// معرفة أنواع البيانات باستخدام typeof
console.log("نوع الاسم:", typeof fullName);
console.log("نوع العمر:", typeof age);
console.log("نوع حالة الطالب:", typeof isStudent);
console.log("نوع مشروع التخرج:", typeof graduationProject);
console.log("نوع العمل الحالي:", typeof currentJob);

// العمليات الحسابية
const currentYear = 2026;
let birthYear = currentYear - age;
let ageAfter5Years = age + 5;
let yearsTo30 = 30 - age;

// عرض المعلومات بشكل مرتب باستخدام Template Literals
console.log(`
--- Student Profile ---
الاسم الكامل: ${fullName}
العمر: ${age} سنة
البلد: ${country}
التخصص: ${major}
هل أنت طالب حالياً؟ ${isStudent}
هل تعمل حالياً؟ ${isWorking}
سنة الميلاد التقريبية: ${birthYear}
العمر بعد 5 سنوات: ${ageAfter5Years}
السنوات المتبقية للوصول لعمر 30: ${yearsTo30}
`);