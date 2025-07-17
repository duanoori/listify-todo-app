document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const taskText = input.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div class="actions">
                <button class="complete-btn">✔</button>
                <button class="delete-btn">🗑️</button>
            </div>
        `;

        list.appendChild(li);
        input.value = '';
    });

    list.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.closest('li').remove();
        } else if (e.target.classList.contains('complete-btn')) {
            const task = e.target.closest('li').querySelector('.task-text');
            task.classList.toggle('completed');
        }
    });
});
