import * as C from './styles';

type Props = {
    data:{
        url: string,
        name: string;
    }
}

export const PhotoItem = ({ data }: Props) => {
    return (
        <C.Container>
            <img src={data.url} alt='' />
            {data.name}
        </C.Container>
    );
}