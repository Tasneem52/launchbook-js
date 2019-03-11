let data =
  [
    {
      user: {
        name: "Adam Sheehan",
        avatar_url: "http://placekitten.com/g/50/50"
      },
      content: "Want to me to diagram that for you?",
      liked: false,
      comments: [
        {
          user: {
            name: "Everyone Everywhere",
            avatar_url: "http://placekitten.com/g/50/50"
          },
          content: "Yes!"
        }
      ]
    },
    {
      user: {
        name: "Eric Kelly",
        avatar_url: "http://placekitten.com/g/50/50"
      },
      content: "Everyone, please set up the preferences in Apollo for Sublime.",
      liked: true,
      comments: [
        {
          user: {
            name: "Helen Hood",
            avatar_url: "http://placekitten.com/g/50/50"
          },
          content: "Cats are awesome! Especially Mr. G."
        }
      ]
    },
    {
      user: {
        name: "Helen Hood",
        avatar_url: "http://placekitten.com/g/50/50"
      },
      content: "One day I will steal Mr. G!",
      liked: false,
      comments: [
        {
          user: {
            name: "Eric Kelly",
            avatar_url: "http://placekitten.com/g/50/50"
          },
          content: "NEVARRRR!"
        }
      ]
    },
    {
      user: {
        name: "Sam McTaggart",
        avatar_url: "http://placekitten.com/g/50/50"
      },
      content: "Objective C is incredible.",
      liked: false,
      comments: [
        {
          user: {
            name: "Faizaan Shamsi",
            avatar_url: "http://placekitten.com/g/50/50"
          },
          content: "Have you seen Ruby Motion?"
        }
      ]
    }
  ]

let items = document.getElementById('list-of-posts')

  data.forEach(post => {
    listItem = document.createElement('li')
    items.appendChild(listItem)
    div1 = document.createElement('div')
    div1.className='media-img'
    listItem.appendChild(div1)
    img1 = document.createElement('img')
    img1.id='avatar-url'
    img1.src=`${post.user.avatar_url}`
    div1.appendChild(img1)

    div2 = document.createElement('div')
    div2.className='media-body'
    listItem.appendChild(div2)
    h4 = document.createElement('h4')
    h4.innerHTML=`${post.user.name}`
    div2.appendChild(h4)
    p1 = document.createElement('p')
    p1.innerHTML=`${post.content}`
    div2.appendChild(p1)


    ul2 = document.createElement('ul')
    ul2.className = "inline-list post-actions"
    listItem.appendChild(ul2)
    li1 = document.createElement('li')
    a1 = document.createElement('a')
    a1.href="#"
    a1.innerHTML="Like"
    li1.appendChild(a1)
    ul2.appendChild(li1)
    li2 = document.createElement('li')
    a2 = document.createElement('a')
    a2.href="#"
    a2.innerHTML="Comment"
    li2.appendChild(a2)
    ul2.appendChild(li2)
    li3 = document.createElement('li')
    a3 = document.createElement('a')
    a3.href="#"
    a3.innerHTML="Share"
    li3.appendChild(a3)
    ul2.appendChild(li3)
  })

//Code for address-form-launchbook goes here
let clearErrors = () => {
  let errorElements = document.getElementsByClassName('error');
  while (errorElements.length > 0) {
    errorElements[0].remove();
  }
}

let addressForm = document.mailingAddressForm

addressForm.addEventListener('submit', (event) => {
  event.preventDefault();
  clearErrors();

  const firstName = event.target.firstName.value
  if (firstName === '') {
    let divElement = document.createElement('div')
    divElement.innerText = "can't be blank"
    divElement.className = 'error'
    event.target.firstName.parentNode.appendChild(divElement)
  }

  const lastName = event.target.lastName.value
  if (lastName === '') {
    let divElement = document.createElement('div')
    divElement.innerText = "can't be blank"
    divElement.className = 'error'
    event.target.lastName.parentNode.appendChild(divElement)
  }

  const address = event.target.address.value
  if (address === '') {
    let divElement = document.createElement('div')
    divElement.innerText = "can't be blank"
    divElement.className = 'error'
    event.target.address.parentNode.appendChild(divElement)
  }

  const city = event.target.city.value
  if (city === '') {
    let divElement = document.createElement('div')
    divElement.innerText = "can't be blank"
    divElement.className = 'error'
    event.target.city.parentNode.appendChild(divElement)
  }

  const state = event.target.state.value
  if (state === '') {
    let divElement = document.createElement('div')
    divElement.innerText = "can't be blank"
    divElement.className = 'error'
    event.target.state.parentNode.appendChild(divElement)
  }

  const zipCode = event.target.zipCode.value
  if (zipCode === '') {
    let divElement = document.createElement('div')
    divElement.innerText = "can't be blank"
    divElement.className = 'error'
    event.target.zipCode.parentNode.appendChild(divElement)
  }

  const phoneNumber = event.target.phoneNumber.value
  if (phoneNumber === '') {
    let divElement = document.createElement('div')
    divElement.innerText = "can't be blank"
    divElement.className = 'error'
    event.target.phoneNumber.parentNode.appendChild(divElement)
  }

  const email = event.target.email.value
  if (email === '') {
    let divElement = document.createElement('div')
    divElement.innerText = "can't be blank"
    divElement.className = 'error'
    event.target.email.parentNode.appendChild(divElement)
  }

})
