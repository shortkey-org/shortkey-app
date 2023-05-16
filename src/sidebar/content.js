export default function SidebarContent({children})
{

    return (
        <div
            className="sidebar-ct" style={{paddingBottom: 20}}>

                <div
                    className="inner-sidebar-ct -wrp-80">

                        {children}

                </div>

        </div>
    );

}