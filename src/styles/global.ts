import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #202024;
        --red:#F75A68;
        --green: #015F43;
        --text-body:#C4C4CC;
        --text-title:#E1E1E6;
        --shape: #323238;
        --second-button: #29292e;
        --input-background: #121214;

    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    // font-size:16px padrão desktop

    html{
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }
    //Rem = 1rem = tamanho do font-size da página
    //Usamos % pois o foco é acessibilidade
    //Se o usuário aumentar ou diminuir tamanho da fonte
    //Ela sera modificada proporcionalmente e isso fará 
    //Com que o valor não fique fixado em 15px por exemplo
    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }//por padrão input textarea e button não herdam a fonte do body, da forma acima sobrescrevo

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }
    
    button{
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    /* Global modal style */
    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        position: fixed; /*Tela toda*/
        top: 0;
        bottom: 0;
        right: 0;
        left:0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }
    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }

`

