import styled from "styled-components";

const ProgressForCardConteiner = ({ className }) => {
  return (
    <div className={className}>
      <div className="progress-info">
        <div> Первый</div>
        <div> Второй</div>
        <div> Третий</div>
        <div> Четвертый</div>
        <div> Пятый</div>
      </div>
    </div>
  );
};

export const ProgressForCard = styled(ProgressForCardConteiner)`
   display: flex;
    margin: 0 auto;
    padding: 40px 20px;
    width: 900px;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  & .progress-info {
    display: flex;
    justify-content: space-between;
    width: 90%;
  }

  & .progress-info > div {
    margin: 0 10px;
    padding: 10px 20px;
    background: #e0e0e0;
    border-radius: 5px;
    text-align: center;
  }
`;
