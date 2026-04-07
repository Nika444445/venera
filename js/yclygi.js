async function fetchServices() {
    let url = 'http://localhost/myserver/post'
    let d = { action: 'get_services' }

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
            fillServices(result.services)
        } else {
            console.error('Ошибка:', result.message)
        }
    } catch (error) {
        console.error('Ошибка:', error)
    }
}

// Заполнение карточек услуги
function fillServices(servicesData) {
    const cards = document.querySelectorAll('.servic_cont')

    servicesData.forEach((service, index) => {
        const card = cards[index]

        if (card) {

            const photoImg = card.querySelector('.servic-img img')
            if (photoImg && service.photo) {
                photoImg.src = `img/${service.photo}`
            }

            const nameElement = card.querySelector('.name')
            if (nameElement) {
                nameElement.textContent = service.name_service
            }

            const descElement = card.querySelector('.desc')
            if (descElement) {
                descElement.textContent = service.description
            }

            const timeElement = card.querySelector('.time')
            if (timeElement) {
                timeElement.textContent = service.time
            }

            const priceElement = card.querySelector('.price')
            if (priceElement) {
                priceElement.textContent = service.price
            }
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    fetchServices()
})
