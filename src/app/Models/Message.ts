export class Message {
    public transmitter: string;
    public receiver: string[];
    public topic: string;
    public content: string;
    public statusReceived: string;
    public statusDeleted: string;


    constructor(transmitter: string, receiver: string[], topic: string, content: string,
        statusReceived: string, statusDeleted: string) {
        this.transmitter = transmitter;
        this.receiver = receiver;
        this.topic = topic;
        this.content = content;
        this.statusReceived = statusReceived;
        this.statusDeleted = statusDeleted;
    }
}