function updateCountdown() {
    // Lấy thời điểm hiện tại ở múi giờ UTC
    const nowUtc = new Date();

    // Chuyển đổi thời gian hiện tại sang múi giờ Việt Nam
    const nowVn = new Date(nowUtc.toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }));

    // Thời điểm Tết âm lịch năm 2024
    const tet2024 = new Date("2024-02-10T00:00:00Z").getTime();

    // Tính thời gian còn lại (cộng thêm 7 giờ)
    const timeRemaining = tet2024 - nowVn.getTime() - 7 * 60 * 60 * 1000;

    // Tính số ngày, giờ, phút và giây
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Hiển thị kết quả
    document.getElementById("daysNumber").innerHTML = days;
    document.getElementById("hoursNumber").innerHTML = hours;
    document.getElementById("minutesNumber").innerHTML = minutes;
    document.getElementById("secondsNumber").innerHTML = seconds;

    // Hiển thị thời gian hiện tại
    displayCurrentTime();
}

function displayCurrentTime() {
    // Lấy thời gian hiện tại ở múi giờ Việt Nam
    var thoiGianHienTai = new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' });

    // Chuyển đổi thời gian hiện tại thành đối tượng Date
    var thoiGianHienTaiDate = new Date(thoiGianHienTai);

    // Lấy giờ, phút và giây
    var hoursNow = thoiGianHienTaiDate.getHours();
    var minutesNow = thoiGianHienTaiDate.getMinutes();
    var secondsNow = thoiGianHienTaiDate.getSeconds();

    // Hiển thị thời gian hiện tại
    document.getElementById("thoiGianNumber").innerHTML = `${hoursNow}:${minutesNow}:${secondsNow}`;
}

// Cập nhật mỗi giây
setInterval(updateCountdown, 1000);

// Lấy nhãn ngày và cập nhật giá trị
const daysLabelElement = document.getElementById("daysLabel");
daysLabelElement.innerHTML = "Ngày";

// Lấy nhãn giờ và cập nhật giá trị
const hoursLabelElement = document.getElementById("hoursLabel");
hoursLabelElement.innerHTML = "Giờ";

// Lấy nhãn phút và cập nhật giá trị
const minutesLabelElement = document.getElementById("minutesLabel");
minutesLabelElement.innerHTML = "Phút";

// Lấy nhãn giây và cập nhật giá trị
const secondsLabelElement = document.getElementById("secondsLabel");
secondsLabelElement.innerHTML = "Giây";

// Gọi hàm lần đầu để hiển thị ngay khi trang được tải
updateCountdown();

// Gọi hàm displayCurrentTime lần đầu để hiển thị thời gian hiện tại
displayCurrentTime();
