import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';

interface SketchPadProps {
    width: number;
    height: number;
    onImageCapture: (dataURL: string) => void;
}

const SketchPad: React.FC<SketchPadProps> = ({ width, height, onImageCapture }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState<boolean>(false);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            canvas.width = width;
            canvas.height = height;
            const context = canvas.getContext('2d');
            if (context) {
                context.lineWidth = 30;
                context.lineCap = 'round';
                context.strokeStyle = '#000000';
                setCtx(context);
            }
        }
    }, [width, height]);

    const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
        setIsDrawing(true);
        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
        }
    };

    const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (isDrawing && ctx) {
            ctx.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
            ctx.stroke();
        }
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    const captureImage = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const dataURL = canvas.toDataURL().split(';base64,')[1];
            onImageCapture(dataURL);
        }
    };


    return (
        <>
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseOut={stopDrawing}
                style={{ border: '1px solid #000000' }}
            />
            <Button onClick={captureImage} variant='primary'>Capturar imagen</Button>
        </>
    );
};

export default SketchPad;
