 
function AboutPage(props) {
    return (
        <>
            <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
                <h3>About TodoList</h3>
                <p className='mt-3 fs-6'>
                    A to-do list is a simple yet powerful tool that helps individuals and organizations stay organized and focused on their tasks and goals. It serves as a visual reminder of the tasks that need to be completed, ensuring that nothing important gets overlooked or forgotten.  A to-do list typically consists of a collection of tasks or items that need to be accomplished within a specific timeframe. These tasks can range from simple daily chores to complex projects with multiple subtasks. By listing them down, individuals can prioritize their responsibilities, allocate time efficiently, and track their progress.
                </p>
                <ol className='pd-2'>
                    <li>Organization: A to-do list provides a structured way to organize tasks. By breaking down big projects into smaller, manageable tasks, it becomes easier to tackle them one by one. This prevents overwhelming feelings and improves productivity.</li>
                    <li>Prioritization: With a to-do list, you can prioritize tasks based on their urgency, importance, or deadlines. By focusing on high-priority items first, you ensure that critical tasks are completed in a timely manner and prevent procrastination.</li>
                    <li>Time management: A to-do list helps you allocate time effectively. By estimating the time required for each task and scheduling them accordingly, you can make the most of your available time and avoid overcommitting or underestimating your workload</li>
                    <li>Increased productivity: Crossing off completed tasks on a to-do list provides a sense of accomplishment, boosting motivation and productivity. It also serves as a visual representation of progress, showing how much you have achieved and inspiring you to keep going.</li>
                    <li>Stress reduction: By having a comprehensive overview of tasks, deadlines, and priorities, you can reduce stress and anxiety. A to-do list frees up mental space as you no longer need to rely solely on memory to keep track of your responsibilities.</li>
                </ol>

            </div>
        </>
    )
}

export default AboutPage
