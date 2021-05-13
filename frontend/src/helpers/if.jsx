const If = props => {
    if(props.test)  return false;
    return props.children;
}
export default If;