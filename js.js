function updateCountdown() {
    // Lấy thời điểm hiện tại ở múi giờ UTC
    const nowUtc = new Date();

    // Chuyển đổi thời gian hiện tại sang múi giờ Việt Nam
    const nowVn = new Date(nowUtc.toLocaleString(undefined, { timeZone: 'Asia/Bangkok' }));


    // Thời điểm Tết âm lịch năm 2024
    const tet2024 = new Date("2024-02-10T00:00:00+07:00").getTime();

    // Tính thời gian còn lại
    const timeRemaining = tet2024 - nowVn.getTime();

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

    // Hiển thị thời gian hiện tại ở múi giờ Việt Nam
    displayCurrentTime();
}

function displayCurrentTime() {
    // Lấy thời gian hiện tại ở múi giờ UTC
    const thoiGianHienTaiUtc = new Date().toUTCString();

    // Hiển thị thời gian hiện tại ở múi giờ Việt Nam
    const thoiGianHienTai = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Bangkok' });


    document.getElementById("thoiGianUtc").innerHTML = thoiGianHienTaiUtc;
    document.getElementById("thoiGianVn").innerHTML = thoiGianHienTaiVn;
}

// Cập nhật mỗi giây
setInterval(updateCountdown, 1000);

// Cập nhật nhãn trước khi gọi hàm
document.getElementById("daysLabel").innerHTML = "Ngày";
document.getElementById("hoursLabel").innerHTML = "Giờ";
document.getElementById("minutesLabel").innerHTML = "Phút";
document.getElementById("secondsLabel").innerHTML = "Giây";

// Gọi hàm lần đầu để hiển thị ngay khi trang được tải
updateCountdown();

// Gọi hàm displayCurrentTime lần đầu để hiển thị thời gian hiện tại
displayCurrentTime();
