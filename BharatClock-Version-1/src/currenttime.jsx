let date = new Date();
function CurrentTime(){
  return <>
    <p>This is the current time : {date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
  </>
}

export default CurrentTime; 