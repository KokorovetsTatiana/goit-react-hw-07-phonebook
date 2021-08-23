import { Containers, Title } from './Container.styles';


const Container = ({ title, children }) => (
    <Containers>
        <Title>{title}</Title>
        {children}
    </Containers>
);
export default Container;