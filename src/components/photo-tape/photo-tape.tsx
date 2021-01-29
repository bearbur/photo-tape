import * as React from 'react';

export type PhotoTapeProps = { photos: Array<{ src: string, name: string }> };

const PhotoTape: React.FunctionComponent<PhotoTapeProps> = ({ photos }: PhotoTapeProps) => {

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
            {photos.map((photo, photoKey) => (
                <div key={`photoKey_${photoKey}`}>
                    <div>
                        <img
                            src={photo['src'] ? photo['src'] : './static/user.svg'}
                            alt={'No data'}
                            style={{ height: '100px' }}
                        />
                    </div>
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        <span>{photo['name']}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PhotoTape;