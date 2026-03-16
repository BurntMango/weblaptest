const toggleBtn = document.getElementById('nagyobbbetu');
const body = document.body;

if (localStorage.getItem('nagybetu mod') === 'enabled') {
    body.classList.add('nagybetu');
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('nagybetu');
    
    if (body.classList.contains('nagybetu')) {
        localStorage.setItem('nagybetu mod', 'enabled');
    } else {
        localStorage.setItem('nagybetu mod', 'disabled');
    }
});