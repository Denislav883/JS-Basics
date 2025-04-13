function maxSequenceOfEqualElements(arr){
        let bestElement = arr[0];
        let bestLength = 1;
    
        let currentElement = arr[0];
        let currentLength = 1;
    
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] === currentElement) {
                currentLength++;
            } else {
                currentElement = arr[i];
                currentLength = 1;
            }
    
            if (currentLength > bestLength) {
                bestLength = currentLength;
                bestElement = currentElement;
            }
        }
    
        const output = [];
        for (let i = 0; i < bestLength; i++) {
            output.push(bestElement);
        }
    
        console.log(output.join(' '));
    }
maxSequenceOfEqualElements();