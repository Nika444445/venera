
// document.getElementById('consultForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Отмена пока

async function fetchData(name, surname, phone, birthdate) {
    // Формируем URL с данными для отправки
    let url = `http://localhost/myserver/?name=${encodeURIComponent(name)}&surnamee=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&password=${encodeURIComponent(password)}`
    
    // получаем данные из формы
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const phone = document.getElementById('phone').value;
    const birthdate = document.getElementById('birthdate').value;
    const message = document.getElementById('message').value;













    console.log('Заявка отправлена:', { name, surname, phone, birthdate });
    
    // соо об отправке
    document.getElementById('successMessage').style.display = 'block';
    
    // очищаем форму
    document.getElementById('consultForm').reset();
    
   
    setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none';
    }, 5000);
});

