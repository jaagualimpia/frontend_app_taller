export class ClassificationResultDto {

    private constructor(
        public id: number,
        public username: string,
        public algorithm: string,
        public score: number
    ){ }

    public static create(request: {[key: string]: any}) {
        const {
            id,
            username,
            algorithm,
            score
        } = request
        
        return new ClassificationResultDto(id, username, algorithm, score)
    }

}