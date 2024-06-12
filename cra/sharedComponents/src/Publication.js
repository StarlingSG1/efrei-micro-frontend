import "./index.css"

const Publication = ({
      publication
    }) => {

    const { title, description, createdAt } = publication

    return (
      <div className={'publication-container'}>
        <h3 className={'publication-title'}>{title}</h3>
        <p className={'publication-date'}>{createdAt.split('T')[0]}</p>
        <p className={'publication-description'}>{description}</p>
      </div>
    )
  }
;

export default Publication;
