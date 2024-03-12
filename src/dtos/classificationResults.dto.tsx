export class ClassificationResultDto {

    private constructor(
        public username: string,
        public algorithm: string,
        public score: number
    ){ }

    public static create(request: {[key: string]: any}) {
        const {
            username,
            algorithm,
            score
        } = request
        
        return new ClassificationResultDto(username, algorithm, score)
    }

}