Adding Tasks:

Description: Users can add new tasks to the to-do list.
Specification: The application provides an input field where users can type in their tasks, and by clicking the "Add" button, a new task is added to the list.
Marking Tasks as Completed:

Description: Users can mark tasks as completed.
Specification: Clicking on a task (represented by an <li> element) toggles the "checked" class, visually marking it as completed. Completed tasks have a different appearance.
Deleting Tasks:

Description: Users can delete tasks from the to-do list.
Specification: Clicking on the delete button (represented by a <span> element with an "×" character) associated with a task removes the entire task from the list.
Local Storage Persistence:

Description: The to-do list data is persisted using local storage.
Specification: The application uses localStorage to store and retrieve the current state of the to-do list. This ensures that the list persists even when the user refreshes or closes the page.
