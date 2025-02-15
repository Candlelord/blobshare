document.addEventListener('DOMContentLoaded', () => {
  const connectWalletButton = document.getElementById('connectWalletButton');
  const createBlobButton = document.getElementById('createBlobButton');
  const importBlobButton = document.getElementById('importBlobButton');
  const saveBlobButton = document.getElementById('saveBlobButton');
  const searchFriendButton = document.getElementById('searchFriendButton');

  const createBlobSection = document.getElementById('createBlobSection');
  const blobsContainer = document.getElementById('blobsContainer');
  const blobForm = document.getElementById('blobForm');
  const blobNameInput = document.getElementById('blobName');
  const blobImageInput = document.getElementById('blobImage');
  const sendBlobSection = document.getElementById('sendBlobSection');
  const friendNameInput = document.getElementById('friendName');
  const searchResults = document.getElementById('searchResults');

  connectWalletButton.addEventListener('click', () => {
    alert('Wallet connected (simulated)');
  });

  createBlobButton.addEventListener('click', () => {
    blobForm.classList.remove('hidden');
  });

  importBlobButton.addEventListener('click', () => {
    const blobName = prompt('Enter Blob Name:');
    const blobId = prompt('Enter Blob ID:');
    const blobData = 'Random generated data for ' + blobId;
    addBlob(blobName, blobData);
  });

  saveBlobButton.addEventListener('click', () => {
    const blobName = blobNameInput.value;
    const blobImage = blobImageInput.files[0];
    const blobData = blobImage ? URL.createObjectURL(blobImage) : 'No image';
    addBlob(blobName, blobData);
    blobForm.classList.add('hidden');
    blobNameInput.value = '';
    blobImageInput.value = '';
  });

  searchFriendButton.addEventListener('click', () => {
    const friendName = friendNameInput.value;
    searchResults.innerHTML = `<p>Searching for ${friendName}...</p>`;
    setTimeout(() => {
      searchResults.innerHTML = `<p>Friend ${friendName} found!</p>
      <button onclick="sendBlob()">Send Blob</button>`;
      searchResults.classList.remove('hidden');
    }, 2000);
  });
});

function addBlob(name, data) {
  const blobCard = document.createElement('div');
  blobCard.classList.add('blob-card');
  blobCard.innerHTML = `
    <h3>${name}</h3>
    <p>${data}</p>
    <button onclick="showSendBlobSection()">Send to Friend</button>
    <button onclick="mintBlob()">Mint as NFT</button>
  `;
  document.getElementById('blobsContainer').appendChild(blobCard);
}

function showSendBlobSection() {
  document.getElementById('sendBlobSection').classList.remove('hidden');
}

function mintBlob() {
  alert('Blob minted as NFT (simulated)');
}

function sendBlob() {
  alert('Blob sent to friend (simulated)');
  document.getElementById('sendBlobSection').classList.add('hidden');
  document.getElementById('searchResults').classList.add('hidden');
  document.getElementById('friendName').value = '';
}