/* eslint-disable react/prop-types */

export const ApplicationCard = ({ data }) => {
  return (
    <div
      className="preview-border"
      style={{ display: 'flex', flexFlow: 'row', gap: '30px', padding: '30px' }}
    >
      <p>Дата</p>
      <p>{data.text}</p>
      <p>Реципиент: {data.recipientId}</p>
      <p>Волонтёр: {data.volunteerId}</p>
    </div>
  );
};
