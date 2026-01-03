import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Button } from './Button'


describe('Button', () => {

    const user = userEvent.setup();
    const myFunction = jest.fn();

    it('Deve renderizar corretamente', () => {
        render(<Button text='Clique aqui' data-testid="main_button" />)
        expect(screen.getByTestId('main_button')).toBeVisible()
    })

    it('Deve existir uma variante', () => {
        render(<Button text='Clique aqui' data-testid="main_button" />)
        expect(screen.getByTestId('main_button')).toHaveClass('primary')
    })

    it('Deve estar desabilitado', async () => {
        render(<Button text='Clique aqui' data-testid="main_button" disabled />)
        await user.click(screen.getByTestId('main_button'))
        expect(screen.getByTestId('main_button')).toBeDisabled()

    })



    it('Deve não executar uma funcao quando desabilitado', async () => {
        render(<Button text='Clique aqui' data-testid="main_button" onClick={myFunction} disabled />)
        await user.click(screen.getByTestId('main_button'))
        expect(myFunction).not.toHaveBeenCalled()

    })

    it('Deve executar uma funcao receber um clique', async () => {
        render(<Button text='Cancelar' data-testid="main_button" onClick={myFunction} />)
        await user.click(screen.getByTestId('main_button'))
        expect(myFunction).toHaveBeenCalledTimes(1)
    })

})