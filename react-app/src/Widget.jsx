import React, { useEffect, useRef } from 'react'
import { useImportScript } from "./useScript";

export const Widget = () => {
    const widget = useRef(null)
    const containerRef = useRef(null)

    const onLoad = () => {
        widget.current = window.HelloWorldWidget.init({
            container: containerRef.current
        })
    }

    const onUnmount = () => {
        widget.current.destroy()

    }

    useImportScript('https://demolution.fra1.digitaloceanspaces.com/other/hello-world-widget/widget-init.js', onLoad, onUnmount)


    return (
        <div id="widget-container" ref={containerRef}>12333</div>
    )
}
