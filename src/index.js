import './css/indexstyle.css';




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
	var database = firebase.database();
	console.log(database);
	let totalValue;
	// Load
	database.ref('total/value').on('value', (val) => {
		document.getElementById('total-num').textContent = val.val();
		totalValue = val.val();
		console.log(val.val());
	});
	database.ref('boughtList').on('value', (list) => {
		let boughtList = list.val();
		let ul = document.getElementById('bought-list');
		ul.innerHTML = '';
		for (const item in boughtList) {
			if (boughtList.hasOwnProperty(item)) {
				const el = boughtList[item];
				let li = document.createElement('li');
				li.className = 'bought-list-item';
				li.dataset.key = item;
				let text = document.createElement('span');
				text.textContent = el['name'];
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

		database.ref('total').set({value: totalValue - price.value});
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
		let date = document.getElementById('increase-date');

		database.ref('total').set({value: +totalValue + +amount.value});
		
		amount.value = '';
		date.value = '';
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
			let key = database.ref('shoppingList/'+event.target.id).push().key;
			database.ref('shoppingList/'+event.target.id+'/'+key).set({
				thing: thing,
				price: price
			});
			event.target.previousElementSibling.value = '';
		});
	});
});