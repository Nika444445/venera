async function fetchProf() {
    let url = 'http://localhost/myserver/post'
    let d = { action: 'get_prof' }

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
            fillProfCards(result.prof)
        } else {
            console.error('Ошибка:', result.message)
        }
    } catch (error) {
        console.error('Ошибка:', error)
    }
}

// Заполнение карточек профессионалы

function fillProfCards(profData) {
    const cards = document.querySelectorAll('.prof-card')

    profData.forEach((prof, index) => {
        const card = cards[index]
        
        if (card) {
            const fioElement = card.querySelector('.prof-fio')
            if (fioElement) {
                fioElement.textContent = prof.FIO
            }

            const specElement = card.querySelector('.prof-specialization')
            if (specElement) {
                specElement.textContent = prof.Specialization
            }

            const expElement = card.querySelector('.prof-experience')
            if (expElement) {
                expElement.textContent = prof.Work_experience ? `Стаж: ${prof.Work_experience}` : ''
            }

            const eduElement = card.querySelector('.prof-education')
            if (eduElement) {
                eduElement.textContent = prof.Education
            }

            const photoImg = card.querySelector('.prof-photo img')
            if (photoImg && prof.Photo) {
                photoImg.src = `img/${prof.Photo}`
            }
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    fetchProf()
})
