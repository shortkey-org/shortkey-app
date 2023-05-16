import { forwardRef } from "react";
import { Helmet } from "react-helmet-async";
import Dialog from "./dialog";

const Page = forwardRef(({
    children,
    title = '...',
    ...other
}, ref) => {

    return (
        <div
            ref={ref}
            {...other}>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                {children}
                {/** Cookies dialog with conditions */}

                <Dialog>
                    <h1>InDIalog</h1>
                </Dialog>

        </div>
    );

})

export default Page;