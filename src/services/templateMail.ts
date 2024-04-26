import * as dotenv from 'dotenv';


dotenv.config();


export const templateMail = (token: string, email: string, nome: string): string => {
    const Logo = "https://github.com/Alxdelira/Alxdelira/blob/main/.github/assets/logo.png?raw=true";
    return `
    <html>
        <head>
            <style>
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: #f5f5f5;
                }
                .content {
                    width: 50%;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .content h1 {
                    text-align: center;
                    color: #333;
                }
                .content p {
                    text-align: center;
                    color: #333;
                }
                .content a {
                    display: block;
                    text-align: center;
                    color: #fff;
                    background-color: #007bff;
                    padding: 10px;
                    border-radius: 5px;
                    text-decoration: none;
                }
                .logo {
                    display: block;
                    margin: 0 auto;
                    width: 300px;
                }
                .footer {
                    display: block;
                    margin: 0 auto;
                    width: 100%;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="content">
                    <img class="logo" src="${Logo}" alt="Logo" />
                    <h1>Recuperação de senha</h1>
                    <p>Olá ${nome}, você solicitou a recuperação de senha!</p>
                    <p>Clique no botão abaixo para alterar sua senha</p>
                    <a href="${process.env.FRONT_URL}alterarsenha?token=${token}&email=${email}">Recuperar senha</a>
                    <img class="footer" src="https://raw.githubusercontent.com/Alxdelira/api-jfro/main/src/assets/footer.png" alt="Footer" />
                </div>
            </div>
        </body>
    </html>
    `;
}
