// Модальное окно
    document.addEventListener('DOMContentLoaded', () => { 
    const modal = document.getElementById('modalConsult');// окно
    const openBtn = document.getElementById('openConsultModal');//кнопка
    const closeBtn = document.querySelector('.modal-close');//крестик

    // открытие по кнопке
    if (openBtn && modal) {
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
        });
    }
    // закрытие крестик
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
});

// Отправка формы
async function fetchData(d, modal) {
    let url = 'http://localhost/myserver/post'
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(d).toString(),
        })
        let result = await response.json()
        if (result.status === 'success') {
            // сообщение об удаче
            const successMsg = document.getElementById('successMessage');
            if (successMsg) {
                successMsg.style.display = 'block';
                // само закрывается 
                setTimeout(() => {
                    successMsg.style.display = 'none';
                    if (modal) modal.style.display = 'none';
                    document.getElementById('consult').reset();
                }, 3000);
            }
        } else {
            alert('Ошибка: ' + result.message)
        }
    } catch (error) {
        console.error('Ошибка отправки:', error)
    }
}

function post_form() {
    const modal = document.getElementById('modalConsult')
    const btn_form = document.querySelector('#btn_consult')

    const val_fam = /^[А-ЯЁ][а-яё]{3,30}$/;
    const val_name = /^[А-ЯЁ][а-яё]{3,30}$/;
    const val_phone = /^\+7\d{10}$/;

    btn_form.addEventListener('click', event => {
        event.preventDefault() 
      // Получаем данные из полей 
        const fam = document.getElementById('surname').value
        const name = document.getElementById('name').value
        const phone = document.getElementById('phone').value
        const birthdate = document.getElementById('birthdate').value
        const call_time = document.getElementById('call_time').value
        const service = document.getElementById('service_direction').value
        const agree = document.getElementById('agree').checked

        const d = {action:'submit_consult',fam: fam,name: name,phone: phone,birthdate: birthdate,call_time: call_time,service: service}
        console.log(d)


        // Валидация
        if (!val_fam.test(fam)) {
            alert('Введите фамилию. Фамилия должна начинаться с заглавной буквы');
            return;
        }
        if (!val_name.test(name)) {
            alert('Введите имя. Имя должно начинаться с заглавной буквы');
            return;
        }
        if (!val_phone.test(phone)) {
            alert('Введите номер телефона. Номер должен начинаться с +7');
            return;
        }
        if (call_time === '') {
            alert('Выберите время для звонка');
            return;
        }
        if (service === '') {
            alert('Выберите направление услуги');
            return;
        }
        if (!agree) {
            alert('Подтвердите согласие');
            return;
        }
// отправка в бд
        fetchData(d, modal)
    })
}

document.addEventListener('DOMContentLoaded', function () {
    post_form()
})