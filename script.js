function redirectToUserAccount(userAccountLink) {
    window.location.href = userAccountLink;
}

document.querySelector('.articles a').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = this.href;
});
