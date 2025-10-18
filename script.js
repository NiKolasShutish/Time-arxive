// ПАРОЛЬ ДЛЯ АРХИВА
const ARCHIVE_PASSWORD = "golovko2749";

// Обновление времени
function updateTime() {
    const now = new Date();
    document.getElementById('currentTime').textContent = now.toLocaleString('ru-RU');
}
setInterval(updateTime, 1000);
updateTime();

// Переключение разделов
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = section.style.display === 'block' ? 'none' : 'block';
}

// Добавление записи в дневник
function addDiaryEntry() {
    const textarea = document.getElementById('newEntry');
    const diaryContent = document.getElementById('diaryContent');
    
    if (textarea.value.trim() !== '') {
        const timestamp = new Date().toLocaleString('ru-RU');
        const entry = document.createElement('div');
        entry.className = 'memory-fragment';
        entry.innerHTML = `
            <p class="timestamp">[${timestamp}]</p>
            <p>${textarea.value}</p>
        `;
        
        diaryContent.appendChild(entry);
        textarea.value = '';
        
        // Прокрутка к новой записи
        entry.scrollIntoView({ behavior: 'smooth' });
    }
}

// Выход из системы
function logout() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('mainArchive').style.display = 'none';
    
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
}

// Автофокус на поле пароля
document.getElementById('archivePassword')?.focus();

// Закрытие разделов при клике вне их
document.addEventListener('click', function(event) {
    if (!event.target.closest('.menu-item') && !event.target.closest('.content-section')) {
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });
    }
});

// Проверка авторизации при загрузке (для PHP версии)
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('auth') === 'success') {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('mainArchive').style.display = 'block';
    }
});

