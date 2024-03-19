//التصنيفات
var dropdown = document.getElementById("categories");
dropdown.style.position = "fixed";
dropdown.style.top = "100px"; 
dropdown.style.left = "23px"; 

//البحث

var gamesDatabase = {
    "crash-cars.html": ["كراش سيارات", "crash cars", "", ""],
    "mario-page.html": ["ماريو", "mario"],
    "zelda-page.html": ["زيلدا", "zelda"],
    // يمكنك إضافة المزيد من الألعاب هنا...
};

// البحث
function search() {
    var keyword = document.getElementById("searchInput").value.trim(); // الحصول على الكلمة المفتاحية من الحقل النصي
    if (keyword !== "") {
        var found = false;
        // مقارنة الكلمات الرئيسية المدخلة مع الكلمات الرئيسية في قاعدة البيانات
        for (var gameUrl in gamesDatabase) {
            var keywords = gamesDatabase[gameUrl]; // الكلمات الرئيسية لهذا العنصر في قاعدة البيانات
            for (var i = 0; i < keywords.length; i++) {
                if (keywords[i].includes(keyword)) {
                    window.location.href = gameUrl; // إعادة توجيه المستخدم إلى الصفحة المطلوبة إذا تم العثور على تطابق
                    found = true;
                    break;
                }
            }
            if (found) {
                break;
            }
        }
        if (!found) {
            alert("لم يتم العثور على اللعبة."); // عرض رسالة إذا لم يتم العثور على اللعبة
        }
    } else {
        alert("يرجى إدخال كلمة للبحث."); 
    }
}

