export function deleteCabinet(idCardInfo, state, setState) {
    console.log(state);
  setState((prevState) =>
    prevState.filter((cardInfo) => cardInfo.unikId !== idCardInfo)
  );
  if (state.length) {
    localStorage.clear();
  }
}
