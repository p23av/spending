import './scss/main.scss';
// import './css/indexstyle.css';

window.addEventListener('load', () => {

  if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('./sw.js')
      .then(registration => {
        console.log('Service worker successfully registered', registration);
      })
      .catch(error => {
        console.log('Service worker registration failed', error);
      });
  }
});

let database
let totalValue

document.addEventListener('DOMContentLoaded', function () {
  var firebaseConfig = {
    apiKey: "AIzaSyC0vKqCtJ9IhEP6nboRWqN6ptRurpMbCBE",
    authDomain: "decrease-54dec.firebaseapp.com",
    databaseURL: "https://decrease-54dec.firebaseio.com",
    projectId: "decrease-54dec",
    storageBucket: "decrease-54dec.appspot.com",
    messagingSenderId: "807302734188",
    appId: "1:807302734188:web:bd0db8c3a4258e618e5349"
  };
  firebase.initializeApp(firebaseConfig);
  database = firebase.database();
  console.log(database);
  // let totalValue;
  // Load
  database.ref('total/value').on('value', (val) => {
    document.getElementById('total-num').textContent = val.val();
    totalValue = val.val();
    console.log(val.val());
  });
  database.ref('boughtList').on('value', (list) => {
    let boughtList = list.val();
    refreshListByID('bought-list', boughtList)
    // let ul = document.getElementById('bought-list');
    // ul.innerHTML = '';
    // for (const item in boughtList) {
    //   if (boughtList.hasOwnProperty(item)) {
    //     const el = boughtList[item];
    //     let li = document.createElement('li');
    //     li.className = 'list-item';
    //     li.dataset.key = item;
    //     let text = document.createElement('span');
    //     text.textContent = el['name'];
    //     let num = document.createElement('span');
    //     num.textContent = el['price'];
    //     let i = document.createElement('i');
    //     i.innerHTML = '&#8381;';
    //     num.append(i);
    //     li.append(text);
    //     li.append(num);
    //     ul.append(li);
    //   }
    // }
  });
  database.ref('increaseList').on('value', (list) => {
    let increaseList = list.val();
    let ul = document.getElementById('increase-list');
    ul.innerHTML = '';
    for (const item in increaseList) {
      if (increaseList.hasOwnProperty(item)) {
        const element = increaseList[item];
        let li = document.createElement('li');
        li.className = 'list-item';
        li.dataset.key = item;
        let value = document.createElement('span');
        value.textContent = element['value'];
        let date = document.createElement('span');
        date.textContent = element['date'];
        let i = document.createElement('i');
        i.innerHTML = '&#8381;';
        value.append(i);
        li.append(value);
        li.append(date);
        ul.append(li);
      }
    }
  });
  database.ref('shoppingList/addS').on('value', (list) => {
    let shoppingList = list.val();
    let ul = document.getElementById('shopping-list-s').getElementsByTagName('ul')[0];
    ul.innerHTML = '';
    for (const item in shoppingList) {
      if (shoppingList.hasOwnProperty(item)) {
        const el = shoppingList[item];
        let li = document.createElement('li');
        li.className = 'bought-list-item';
        li.dataset.key = item;
        let text = document.createElement('span');
        text.textContent = el['thing'];
        let num = document.createElement('span');
        num.textContent = el['price'];
        let i = document.createElement('i');
        i.innerHTML = '&#8381;';
        num.append(i);
        li.append(text);
        li.append(num);
        ul.append(li);
      }
    }
  });
  database.ref('shoppingList/addM').on('value', (list) => {
    let shoppingList = list.val();
    let ul = document.getElementById('shopping-list-m').getElementsByTagName('ul')[0];
    ul.innerHTML = '';
    for (const item in shoppingList) {
      if (shoppingList.hasOwnProperty(item)) {
        const el = shoppingList[item];
        let li = document.createElement('li');
        li.className = 'bought-list-item';
        li.dataset.key = item;
        let text = document.createElement('span');
        text.textContent = el['thing'];
        let num = document.createElement('span');
        num.textContent = el['price'];
        let i = document.createElement('i');
        i.innerHTML = '&#8381;';
        num.append(i);
        li.append(text);
        li.append(num);
        ul.append(li);
      }
    }
  });
  database.ref('shoppingList/addL').on('value', (list) => {
    let shoppingList = list.val();
    let ul = document.getElementById('shopping-list-l').getElementsByTagName('ul')[0];
    ul.innerHTML = '';
    for (const item in shoppingList) {
      if (shoppingList.hasOwnProperty(item)) {
        const el = shoppingList[item];
        let li = document.createElement('li');
        li.className = 'bought-list-item';
        li.dataset.key = item;
        let text = document.createElement('span');
        text.textContent = el['thing'];
        let num = document.createElement('span');
        num.textContent = el['price'];
        let i = document.createElement('i');
        i.innerHTML = '&#8381;';
        num.append(i);
        li.append(text);
        li.append(num);
        ul.append(li);
      }
    }
  });
  // decrease
  document.getElementById('decrease-btn').addEventListener('click', (event) => {
    event.preventDefault();
    let price = document.getElementById('decrease-price');
    let name = document.getElementById('decrease-name');

    database.ref('total').set({ value: totalValue - price.value });
    let key = database.ref('boughtList').push().key;
    database.ref('boughtList/' + key).set({
      name: name.value,
      price: price.value,
      // key: key
    });

    //
    price.value = '';
    name.value = '';
  });
  // increase
  document.getElementById('increase-btn').addEventListener('click', (event) => {
    event.preventDefault();
    let amount = document.getElementById('increase-amount');
    let incDate = document.getElementById('increase-date');

    database.ref('total').set({ value: +totalValue + +amount.value });

    let key = database.ref('increaseList').push().key;
    database.ref('increaseList/' + key).set({
      value: amount.value,
      date: incDate.value
    })

    amount.value = '';
    incDate.value = '';
  });
  // add-item
  [...document.getElementsByClassName('add-item')].forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      event.target.classList.add('add-item_close');
      event.target.parentElement.getElementsByClassName('new-item')[0].classList.add('active');
    });
  });
  [...document.querySelectorAll('.new-item button')].forEach((addBtn) => {
    addBtn.addEventListener('click', (event) => {
      event.preventDefault();
      event.target.parentElement.parentElement.getElementsByClassName('add-item')[0].classList.remove('add-item_close');
      event.target.parentElement.parentElement.getElementsByClassName('new-item')[0].classList.remove('active');
      let fullText = event.target.previousElementSibling.value.split(' : ');
      let thing = fullText[0];
      let price = fullText[1];
      let key = database.ref('shoppingList/' + event.target.id).push().key;
      database.ref('shoppingList/' + event.target.id + '/' + key).set({
        thing: thing,
        price: price
      });
      event.target.previousElementSibling.value = '';
    });
  });
  [...document.getElementsByClassName('top-nav__item')].forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      [...document.getElementsByClassName('top-nav__item')].forEach(el => {
        el.classList.remove('active');
      });
      this.classList.add('active');
      [...document.getElementsByClassName('form-box')].forEach(el => {
        el.classList.remove('active');
      });
      [...document.getElementsByClassName('list-wrapper')].forEach(el => {
        el.classList.remove('active');
      });
      document.getElementById(this.getAttribute('href').slice(1)).classList.add('active');
      document.getElementsByClassName(`${this.getAttribute('href').slice(1)}-list-wrapper`)[0].classList.add('active');
    });
  });
});

[...document.getElementsByClassName('navbar__link')].forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    [...document.getElementsByClassName('navbar__link')].forEach(elem => {
      if (elem == this) {
        elem.classList.add('active');
      } else {
        elem.classList.remove('active');
      }
    })
    const id = this.getAttribute('href').slice(1);
    [...document.getElementsByTagName('section')].forEach(section => {
      if (section.id == id) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  });
});

function getParentByClassName (el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}

function createList (listClassName) {
  const list = document.createElement('ul');

  return list;
}

function refreshListByID(id, items) {
  const list = document.getElementById(id);
  list.innerHTML = '';
  for (const item in items) {
    if (items.hasOwnProperty(item)) {
      const element = items[item];
      const listItem = document.createElement('li');
      listItem.dataset.key = item;
      listItem.className = 'list-item'

      const name = document.createElement('span');
      name.textContent = element.name

      const body = document.createElement('p')

      const price = document.createElement('span')
      price.textContent = element.price
      const priceIcon = document.createElement('i')
      priceIcon.innerHTML = '&#8381;'
      price.append(priceIcon)

      const cancelBtn = document.createElement('button')
      const cancelBtnIcon = document.createElement('span')
      cancelBtn.className = 'material-icons'
      cancelBtnIcon.textContent = 'do_not_disturb'
      cancelBtn.append(cancelBtnIcon)

      cancelBtn.addEventListener('click', function(event) {
        event.preventDefault()
        const param = {}
        param.key = getParentByClassName(this, 'list-item').dataset.key
        param.returnValue = isNaN(parseInt(this.previousSibling.textContent)) ? 0 : parseInt(this.previousSibling.textContent)
        // showModal('confirm-bought-cancel', param)
        let one = confirm('Удалить из списка с возвращением суммы?')
        if (one) {
          database.ref(`boughtList/${param.key}`).remove()
            .then(() => {
              database.ref('total').set({
                value: +totalValue + +param.returnValue
              })
            })
        }
      })

      body.append(price)
      body.append(cancelBtn)

      listItem.append(name);
      listItem.append(body);
      list.append(listItem)
    }
  }
}
