/* eslint-disable react/prop-types */
export const SmartHeader = ({ title, withFilter }) => {
  return (
    <>
      <div
        className="preview-border"
        style={{
          display: 'flex',
          flexFlow: 'row',
          justifyContent: 'space-between',
          padding: '16px',
        }}
      >
        <p>{title}</p>
        {withFilter && <p>Фильтр</p>}
      </div>
    </>
  );
};
