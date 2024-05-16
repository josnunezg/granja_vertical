import PropTypes from 'prop-types';

function Card({ title, subTitle, secondSubTitle, actions = [] }) {
  const id = (new Date()).getTime();
  return (
    <section className="flex flex-col border rounded py-10 bg-stone-50 px-8 h-fit">
      <div className='w-full flex flex-col gap-8'>
        <p className="text-blue-600 font-bold text-center">{title}</p>
        <p className='text-center'>{subTitle}</p>
        <p className='text-center'>{secondSubTitle}</p>
      </div>
      <p className='font-bold mt-10 mb-3'>Opciones de Control:</p>
      <div className='w-full flex flex-col gap-5'>
        {actions.map((action, index) => (
          <button
            type='button'
            onClick={action.onClick}
            key={`action-${id}-${index}`}
            className='w-full py-3 bg-blue-600 rounded text-white'
          >
            {action.title}
          </button>
        ))}
      </div>
    </section>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  secondSubTitle: PropTypes.string,
  actions: PropTypes.array
}

export default Card;