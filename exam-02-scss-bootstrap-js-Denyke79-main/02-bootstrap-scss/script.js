const addButton = document.getElementById('addBtn');
const newRowPlace = document.getElementById('tableBody');

addButton.addEventListener('click', () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value
    const birthDate = document.getElementById('birthDate').value;
    const radioJunior = document.getElementById('radioJunior').value;
    const radioSenior = document.getElementById('radioSenior').value;
    const genderSelect = document.getElementById('genderSelect').value;
    const radioValue = document.querySelector('input[name="flexRadioDefault"]:checked').value;;

    // radioSenior != 0 ? radioValue = radioSenior : radioValue = radioJunior;


    const newRow = `
    <tr>
        <th scope="row"></th>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${birthDate}</td>
            <td>${radioValue}</td>
            <td>${genderSelect}</td>
    </tr> 
    `;
    newRowPlace.insertAdjacentHTML('beforeend', newRow);
});