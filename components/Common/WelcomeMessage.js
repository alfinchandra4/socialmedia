import { Icon, Message, Divider } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const HeaderMessage = () => {
    const router = useRouter();
    const signupRoute = router.pathname === "/signup"

    return (
        <Message attached
            color="teal"
            header={signupRoute ? "Get started" : "Welcome Back"}
            icon={signupRoute ? "settings" : "privacy"}
            content={signupRoute ? "Create new account" : "login with email dan password"}
        />
    )

}

export const FooterMessage = () => {
    const router = useRouter();
    const signupRoute = router.pathname === "/signup"

    return (
        <>
            {signupRoute ? (
                <>
                    <Message attached="bottom" warning>
                        <Icon name="help" />
                    Existing user? <Link href="/login">Login here instead</Link>
                    </Message>
                    <Divider hidden />
                </>
            ) : (
                <>
                    <Message attached="bottom" info>
                        <Icon name="lock" />
                        <Link href="/reset">Forget Password?</Link>
                    </Message>
                    <Divider hidden />

                    <Message attached="bottom" info>
                        <Icon name="help" />
                        New user? <Link href="/signup">Signup here</Link> instead {" "}
                    </Message>
                    <Divider hidden />
                </>
            )}
        </>
    );
}