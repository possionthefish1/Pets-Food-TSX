import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <div className='p-2'>
      Hello from About!
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Error rerum blanditiis iste repudiandae.</p>
      <p>Eaque corrupti accusantium perspiciatis esse!</p>
      <p>Quaerat saepe cum magnam dolore?</p>
      <p>Eum voluptates veniam minus ex.</p>
      <p>Placeat iusto quo esse tempore?</p>
      <p>Aspernatur provident necessitatibus eos consectetur?</p>
      <p>Praesentium corporis consequuntur quia provident!</p>
      <p>Quod molestiae quae ex eum?</p>
      <p>Aperiam deserunt at sit doloribus.</p>
    </div>
  );
}
