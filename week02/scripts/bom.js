document.addEventListener('DOMContentLoaded', function () {    
    const input = document.querySelector('#favshap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');

    button.addEventListener('click', function () {
                if (input.value.trim() !== '') {

            const li = document.createElement('li');
            const deleteButton = document.createElement('button');

            li.textContent = input.value;
            deleteButton.textContent = '❌';

            deleteButton.addEventListener('click', function () {
                list.removeChild(li);
            });

            li.append(deleteButton);
            list.append(li);
            input.value = '';
            input.focus();
        } 
    });
});