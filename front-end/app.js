import './styles/styles.css';


const bookForm = document.getElementById('book-form').
	addEventListener('submit', e => {
    	const title = document.getElementById('title').value;
    	const author = document.getElementById('author').value;
    	const isbn = document.getElementById('isbn').value;
    	const image = document.getElementById('image').files;


    			

    	e.preventDefault();
	});
