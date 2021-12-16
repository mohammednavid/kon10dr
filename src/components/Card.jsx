const Card = ({ image, avatar, text1, text2, text3 }) => {
  return (
    <div className="card">
      <img src={image} alt="" className="card_image" />
      <div className="card_content">
        <img src={avatar} alt="" className="card_avatar" />
        <div className="card_text">
          <span>{text1}</span>
          <p>{text2}</p>
          <span>{text3}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
