document.getElementById('add-border').addEventListener('click', function () {
    const friendContainer = document.getElementById('friend-container');
    friendContainer.style.border = '3px solid tomato'

})

function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = '#04113D'
        friend.style.color = '#7CEBA5'

    }
}

document.getElementById('add-friend').addEventListener('click', function () {
    const friendContainer = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3 class="friend-name">friend-5</h3>
            <p>Lorem, ipsum.</p>
    `;
    friendContainer.appendChild(friendDiv)
})
