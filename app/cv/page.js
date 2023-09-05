import React from 'react'
import createServer from 'next'
import React from 'react'
import NouveauCV from '../components/NouveauCV'

const cv = () => {
    return (
        <div>
            <h1>CV</h1>
            <NouveauCV title="Super titre !" />
        </div>
    )
}

export default cv  // ici on exporte le composant

// rafce means: react Arrow FunctionExportCom